import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Download from './components/Download';
import Faq from './components/Faq';
import Contact from './components/Contact';

export default function App() {
    // const [currentUser, setCurrentUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
    // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') ? true : false);

    // On App load, check if user is logged in or not through localStorage
    // currentUser is auto loaded with React's useState() hook
    // useEffect(() => {
    //   if (currentUser) {
    //     currentUser.displayName ? setIsLoggedIn(true) : setIsLoggedIn(false);
    //     getMyPacks().then(body => {
    //       setAllPacks(body.filter(p => p.invitedMembers.includes(currentUser.displayName) || p.joinedMembers.includes(currentUser.displayName) || p.owner === currentUser.displayName));
    //     });
    //   }
    // }, [currentUser]);

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() => <Home />} />
                    <Route exact path='/about' render={() => <About />} />
                    <Route exact path='/download' render={() => <Download />} />
                    <Route exact path='/faq' render={() => <Faq />} />
                    <Route exact path='/contact' render={() => <Contact />} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
