import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit  post' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='title' />
            <TextInput multiline source='title' />
            <DateInput label='Publish' source='publishedAt'/>
        </SimpleForm> 

    </Edit>
  )
}

export default PostEdit