import React from 'react'
import Link from 'gatsby-link'

import bar     from '../images/21.png'
import pretzel from '../images/17.png'
import donut   from '../images/22.png'
import banana  from '../images/7.png'

const IndexPage = () => (
  <div>

    {/*  HEADER start */}
    <div className="has-background-primary">
      <div className="my-section">
        <h1 className="title is-1 has-text-centered has-text-white" style={{paddingTop: 50}}>
          Snacks upon Snacks!
        </h1>
        <h1 className="subtitle has-text-centered has-text-white" >
          Future home of the <strong className="has-text-warning">SNACKS APP</strong>
        </h1>

        <div>
          <img className="header-image" src={bar} />
        </div>
      </div>

    </div>
    <div className="has-background-info" style={{height: 10}}></div>
    {/*  HEADER start */}


    {/*  MIDDLE start */}
    <div className="my-section section" style={{marginTop: 30, marginBottom: 30}}>
      <div className="columns">

        <div className="column">
          <div className="box has-background-success">
            <h3 className="title has-text-centered is-4 has-text-white">Healthy Snacks</h3>
            <p className="has-text-centered has-text-white">
              Access to the worlds best and healthiest snacks!
            </p>
            <img className="feature-image" src={banana} />
          </div>
        </div>

        <div className="column">
          <div className="box has-background-success">
            <h3 className="title has-text-centered is-4 has-text-white">Guilty Snacks</h3>
            <p className="has-text-centered has-text-white">
              For those childhood snacks you can't live without.
            </p>
            <img className="feature-image" src={donut} />
          </div>
        </div>

        <div className="column">
          <div className="box has-background-success">
            <h3 className="title has-text-centered is-4 has-text-white">100% Automated</h3>
            <p className="has-text-centered has-text-white">
              Easy to setup, tweak and have snacks delivered to your door!
            </p>
            <img className="feature-image" src={pretzel} />
          </div>
        </div>

      </div>
    </div>
    {/*  MIDDLE end */}


    {/*  CTA start */}
    <div>
      <div className="has-background-info" style={{paddingTop: 50, paddingBottom: 50}}>
        <div className="my-section" style={{maxWidth: 600}}>
          <h1 className="title is-3 has-text-centered has-text-grey">
            Get notified when we launch!
          </h1>

          <form name="notify" method="POST" data-netlify="true">
            <div className="field">
              <div className="control">
                <input className="input is-large" type="name" placeholder="Your name" name="name" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input className="input is-large" type="email" placeholder="Email Address" name="email" />
              </div>
            </div>

            <div className="field is-grouped is-grouped-middle">
              <div className="control">
                <button type="submit" className="button is-link is-large">Be Notified</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
    {/*  CTA end */}


    {/*  FOOTER start */}
    <div className="has-background-primary">
      <div className="my-section">
        <div style={{marginBottom: 50, paddingTop: 30}} className="has-text-centered has-text-white">
          <p>&copy; 2018 SNACKS.APP</p>
        </div>
      </div>
    </div>
    {/*  FOOTER end */}

  </div>


)

export default IndexPage
