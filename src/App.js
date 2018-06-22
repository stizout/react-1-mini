import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: '',
      name: '',
      friends: [{
        name: "Alex",
        picture: "https://www.swapaw.com/blog/wp-content/uploads/2017/07/funny-dog-8-e1500643440478.jpg"
      },{
        name: "Cher",
        picture: "https://www.askideas.com/wp-content/uploads/2016/11/Cute-Funny-Dog-With-Funny-Hairstyle.jpg"
      }]
    }
  }

  changeName(event) {
    const name = event.target.value
    this.setState(() => {
      return {
        name: name
      }
    })
  }

  updatePicture(event) {
    const picture = event.target.value
    this.setState(() => {
      return {
        picture: picture
      }
    })
  }


  render() {
    return (
      <div>
        Name: <input value={this.state.name} onChange={(event) => {
          this.changeName(event)
        }}/>
        Picture: <input value={this.state.picture} onChange={(event) => {
          this.updatePicture(event)
        }} />
        <div>
          {this.state.friends.map((friend) => {
            return (
              <div>
                <h1>{friend.name}</h1>
                <img src={friend.picture} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}



export default App;
