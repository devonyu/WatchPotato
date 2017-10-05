import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Image, List, Segment, Icon } from 'semantic-ui-react'
import ShowEntry from './ShowEntry.jsx';

class ShowList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $.ajax({
      url: '/recommend',
      method: 'GET',
      success: data => console.log(data)
    });
  }

  render() {
    return (<Segment inverted>
   <List divided inverted verticalAlign='middle' size='medium'>
    <List.Item>
      <List.Content floated='right'>
        <Button icon size='medium' inverted color='green'>
          <Icon name='add to calendar'/>
        </Button>
      </List.Content>
      <Image src='https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UX182_CR0,0,182,268_AL_.jpg' size='small' />
      <List.Content>
        <ul>
        <li>Game of Thrones</li>
        <li>TV-MA</li>
        <li>57min</li>
        <li>Drama, Fantasy</li>
        <li>TV Series (2011- )</li>
      </ul>
      </List.Content>
    </List.Item>
    
   <List.Item>
      <List.Content floated='right'>
        <Button icon size='medium' inverted color='green'>
          <Icon name='add to calendar'/>
        </Button>
      </List.Content>
      <Image src='https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UX182_CR0,0,182,268_AL_.jpg' size='small' />
      <List.Content>
        <ul>
        <li>Game of Thrones</li>
        <li>TV-MA</li>
        <li>57min</li>
        <li>Drama, Fantasy</li>
        <li>TV Series (2011- )</li>
      </ul>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content floated='right'>
        <Button icon size='medium' inverted color='green'>
          <Icon name='add to calendar'/>
        </Button>
      </List.Content>
      <Image src='https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UX182_CR0,0,182,268_AL_.jpg' size='small' />
      <List.Content>
        <ul>
        <li>Game of Thrones</li>
        <li>TV-MA</li>
        <li>57min</li>
        <li>Drama, Fantasy</li>
        <li>TV Series (2011- )</li>
      </ul>
      </List.Content>
    </List.Item>
   
  </List>
  
</Segment>)
  }
} 

export default ShowList;