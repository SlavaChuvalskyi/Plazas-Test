import {render} from 'preact';
import './style.css';
import {featuresArray} from "./features";

export function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

function DashboardLink() {
    return <a href={'/dashboard'} class={"dashboard-link action-color"}>Dashboard</a>
}

function SignUpLink() {
    return <button class={'btn action-color mt-8'} onClick={()=>window.location.href = "./signup"}>Create your free bot</button>
}

function Header() {
    return <div class={'header'}>
        <span class={"header-title brand-color"}>Welcome to PLAZAS</span>
        <span class={"header-sub-title brand-color"}>The most complete Telegram e-commerce bot that does it all.</span>
        <SignUpLink />
        <DashboardLink />
    </div>
}

function Main() {
    return <div class={'main-content'}>
        {featuresArray.map(feature => (
            <div class={'content-feature'} key={`feature-${  feature.id}`}>
                <div class={'feature-wrapper'}>
                    <div class={'feature-description'}>
                        <span class={'feature-description-title brand-color'}>{feature.title}</span>
                        <span class={'feature-description-sub-title brand-color'}>{feature.subTitle}</span>
                        <ul class={'feature-list'}>
                            {feature.text.map((text, index) => (
                                <li class={'feature-list-item brand-color'} key={`item-${index}`}>{text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {feature.img && <div class={'feature-img'}>
                    <img src={feature.img} alt={feature.title} />
                </div>}
            </div>
        ))}
        </div>
}

function Footer() {
    return <div class={'footer'}>
            <SignUpLink />
        </div>
}

render(<App />, document.getElementById('app'));
