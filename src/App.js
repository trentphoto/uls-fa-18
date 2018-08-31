import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './sass/app.css';

import Header from './components/Header'

// pages
import Page_home from './pages/home'
import Page_background from './pages/background'
import Page_last from './pages/last'
import Page_next from './pages/next'
import Page_your from './pages/your'
import Page_kelly from './pages/kelly'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight, faHome } from '@fortawesome/free-solid-svg-icons'
library.add( faCaretRight, faHome )

const scrollToTop = () => {
  document.body.scrollIntoView({behavior: 'smooth'});
}

const PageFade = (props) => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={600}
    mountOnEnter={true}
    unmountOnExit={true}
    onEnter={scrollToTop}
    />
)

const App = ({ location }) => {
  return (
    <div className="app d-flex flex-column">
      <Header />
      <div className="mainWrapper">
        <TransitionGroup>
          <PageFade key={location.key}>
            <div>
              <Switch location={location}>
                <Route exact path="/" component={Page_home} />
                <Route path="/background" component={Page_background} />
                <Route path="/last" component={Page_last} />
                <Route path="/next" component={Page_next} />
                <Route path="/your-place" component={Page_your} />
                <Route path="/james-kelly" component={Page_kelly} />
                <Route render={() => (<div>Not Found</div>)} />
              </Switch>
            </div>
          </PageFade>
        </TransitionGroup>
      </div>
    </div>
  );
}

const Wrapper = () => (
  <BrowserRouter>
    <Route path="/" render={App} />
  </BrowserRouter>
)

export default Wrapper;
