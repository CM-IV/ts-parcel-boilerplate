import * as Preact from "preact";


export default class Body extends Preact.Component<any, any> {

    constructor(props: any) {

        super(props);
    }

    public render() {

        return (

            <>
                <section>
                    <div class="container">
                        <div class="tile is-ancestor">
                            <div class="tile">
                                <div class="tile is-parent">
                                    <article class="is-child box">
                                        <p class="title">TypeScript with Preact and Parcel-Bundler</p>
                                        <p class="subtitle">By CMIV</p>
                                        <div class="content">
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis.
                                            </p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
                                            Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
                                            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                            <figure class="image is-4by3">
                                                <img src="https://i.ibb.co/4mzrRw9/ines-alvarez-fdez-y-LYHin-GDhk-Q-unsplash-1.jpg" alt="ines-alvarez"> </img>
                                            </figure>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. 
                                            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
                                            Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
                                            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <br/>
            </>

        );

    }

}