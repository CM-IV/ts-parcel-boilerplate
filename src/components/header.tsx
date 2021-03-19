import * as Preact from "preact";


export default class Header extends Preact.Component<any, any> {

    constructor(props: any) {

        super(props);
    }

    public render() {

        return (

            <nav class="navbar" role="navigation" aria-label="dropdown navigation">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                    Docs
                    </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item">
                    Overview
                    </a>
                    <a class="navbar-item">
                    Elements
                    </a>
                    <a class="navbar-item">
                    Components
                    </a>
                    <hr class="navbar-divider"></hr>
                <div class="navbar-item">
                    Version 0.9.1
                        </div>
                    </div>
                </div>
            </nav>

        )

    }

}