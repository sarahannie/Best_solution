import React, { Component } from 'react'

export default class Register extends Component {

    state ={
        first:'',
        last:'',
        username:'',
        pass:'',
        confirm:''
    }

    handleChange = (e) =>{
        const fields = Object.assign({}, this.state);
        fields[e.target.name] = e.target.value;
        this.setState({...fields})
    }

  render() {
    return (
      <div className= 'flex justify-center '>
        <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%] mobile:w-[90%]'>
            <text className='text-2xl flex justify-center items-center mb-3'>Register </text>
            <div className='flex mt-3 '>
                <input
                 className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 '   
                 placeholder='First Name'
                 name='first'
                 value={this.state.first}
                 onChange={this.handleChange}
                 required
                 />
                <input
                 className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3'   
                 placeholder='Last Name'
                 name='last'
                 value={this.state.last}
                 onChange={this.handleChange}
                 required
                 />
            </div>
            <div className='flex mt-3 '>
                <input
                 className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'   
                 placeholder='Username'
                 name='username'
                 value={this.state.username}
                 onChange={this.handleChange}
                 required
                 />
            </div>
            <div className='flex mt-3 '>
                <input 
                className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 '
                name='pass'    
                placeholder='Password'
                value={this.state.pass}
                onChange={this.handleChange}
                required
                />
                <input 
                className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3'
                name='confirm'    
                placeholder='Confirm Password'
                value={this.state.confirm}
                onChange={this.handleChange}
                required
                />
            </div>
            <input type="button" value='Register' className='btn mt-7 hover:scale-[1.02]' />
        </div>
      </div>
    )
  }
}
