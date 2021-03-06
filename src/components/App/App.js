import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Workouts from '../Workouts/Workouts'
import LogWorkout from '../LogWorkout/LogWorkout.js'
import Profile from '../Profile/Profile.js'
import EditProfile from '../EditProfile/EditProfile.js'
import Users from '../Users/Users.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: '',
      msgAlerts: [],
      workouts: []
    }
  }

  setWorkouts = workouts => {
    this.setState({
      workouts: workouts
    })
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: '' })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user, workouts } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <React.Fragment>
              <p style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}><span style={{ fontSize: '30px' }}>Welcome to <span style={{ color: '#d9534f' }}>IRONMAN Fit</span>, the social fitness app.</span><br/><br/>Log your workouts, including lifts, runs, bikes and swims.<br/>Share and elevate your fitness journey with your friends and family.</p>
            </React.Fragment>
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} user={user}/>
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} user={user}/>
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />

          <Route exact path='/workouts' user={user} render={() => (
            <React.Fragment>
              <h3 className='mt-5' style={{ textAlign: 'center', color: 'white' }}>Feed</h3>
              <Workouts workouts={workouts} setWorkouts={this.setWorkouts} user={user} msgAlert={this.msgAlert}/>
            </React.Fragment>
          )}/>

          <AuthenticatedRoute exact path='/log-workout' user={user} render={() => (
            <React.Fragment>
              <h3 className='mt-5' style={{ textAlign: 'center', color: 'white' }}>Log Workout</h3>
              <LogWorkout msgAlert={this.msgAlert} user={user}/>
            </React.Fragment>
          )}/>

          <Route exact path='/users/:id' user={user} render={() => (
            <React.Fragment>
              <h3 className='mt-5' style={{ textAlign: 'center', color: 'white' }}>Profile</h3>
              <Profile msgAlert={this.msgAlert} user={user}/>
            </React.Fragment>
          )}/>

          <AuthenticatedRoute exact path='/edit-profile/:id' user={user} render={() => (
            <React.Fragment>
              <EditProfile msgAlert={this.msgAlert} user={user}/>
            </React.Fragment>
          )}/>

          <Route exact path='/users' user={user} render={() => (
            <React.Fragment>
              <h3 className='mt-5' style={{ textAlign: 'center', color: 'white' }}>Athletes</h3>
              <Users user={user}/>
            </React.Fragment>
          )}/>

        </main>
      </Fragment>
    )
  }
}

export default App
