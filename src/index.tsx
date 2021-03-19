import { render } from "preact";
import * as Preact from "preact";
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";


const root = document.getElementById('app');

class Main extends Preact.Component<any, any> {

    constructor(props: any) {

        super(props);

    }

    public render() {

        return (
    
            <>
                <Header />
                <Body />
                <Footer />
            </>
    
        );
    
    }

}


render(<Main />, root);