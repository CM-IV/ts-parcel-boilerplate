import { render } from "preact";
import { Route, Switch, Router } from "wouter-preact";
import * as Preact from "preact";
import Body from "./components/body";
import Docs from "./docs";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./about";
import Account from "./account";
import Pagination from "./components/pagination";


const root = document.getElementById('app');

class Main extends Preact.Component<any, any> {

    constructor(props: any) {

        super(props);

    }

    public render() {

        return (
    
            <>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" component={ Body }></Route>
                        <Route path="/docs" component={ Docs }></Route>
                        <Route path="/about" component={ About }></Route>
                        <Route path="/account" component={ Account }></Route>
                    </Switch>
                    <Pagination />
                    <Footer />
                </Router>
            </>
    
        );
    
    }

}


render(<Main />, root);