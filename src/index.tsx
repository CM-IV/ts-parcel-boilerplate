import { render } from 'preact';

const App = () => (
    <>
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

        <section>
            <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile">
                        <div class="tile is-parent">
                            <article class="is-child box">
                                <p class="title">Welcome to Preact in TypeScript!</p>
                                <p class="subtitle">By CMIV</p>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. 
                                    Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                    <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                    Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                    Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                    Sed eget varius ligula, at volutpat tortor.</p>
                                    <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
                                    Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
                                    Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                    <figure class="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                                    </figure>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <br/>

        <footer class="footer">
            <div class="content has-text-centered">
                <p>&copy; Copyright 2021</p>
                <p>
                <strong>Testing Preact</strong> by <a href="https://dogtowncs.netlify.com/">CMIV</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    </>
);

render(<App />, document.getElementById('app'));