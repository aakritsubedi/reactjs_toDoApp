import React, {Component} from 'react';
import Input from '../Input/Input';

class  SearchBox extends Component{
    
    render(){
        let search = (
            <Input isInline={false}  type='text' placeholder='Search your todo' usedFor='search' onChange={this.props.onChange} id='search-key'/>
        );
        return search;
    }
}

export default SearchBox;