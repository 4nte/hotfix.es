import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Ante Gulin`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 410 }}>
          {/*Personal blog by{' '}*/}
          <a href="https://mobile.twitter.com/ante_gulin">Ante's</a> personal blog.{' '}
            <br/>
            I write about IoT, Web, DevOps && * else.
            &nbsp;
        </p>
      </div>
    );
  }
}

export default Bio;
