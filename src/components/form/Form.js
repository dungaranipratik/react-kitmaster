import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const AllData = {   
    "alldata":[
      {
      "employees":[  
          {"name":"Shyam", "email":"shyamjaiswal@gmail.com","address":{"country":"india"}}
      ],
    "name":"employees"},
     { "pizza":[
          {
              "size":[
              {
                  "large": {
                  "mashreeom":"large mashroom",
                  "chees":"large chees"
                }
              },
              {
              "medium": {
                  "tops":"medium tops",
                  "catchup":"small catchup",
                  "extra":{
                  "garlik":"extra garlik"
                  }
                }
              },
              {
              "small":{
                  "chees":""
                }
              }
          ]
          }  
      ],"name":"pizza"},
     { "country": [
          {
              "cname": "United States",
              "id": "usa",
              "states": [
                  {
                      "name": "State 1 USA",
                      "id": "usaState1",
                      "cities": [
                          {
                              "name": "City 1",
                              "id": "usaState1City1",
                              "area": "12345 sqkm"
                          },
                          {
                              "name": "City 2",
                              "id": "usaState1City2",
                              "area": "12345 sqkm"
                          }
                      ]
                  },
                  {
                      "name": "State 2 USA",
                      "id": "usaState2",
                      "cities": [
                          {
                              "name": "City 3",
                              "id": "usaState2City3",
                              "area": "12345 sqkm"
                          },
                          {
                              "name": "City 4",
                              "id": "usaState2City4",
                              "area": "12345 sqkm"
                          }
                      ]
                  }
              ]
          },
          {
              "cname": "Australia",
              "id": "aus",
              "states": [
                  {
                      "name": "State 1 Australia",
                      "id": "ausState1",
                      "cities": [
                          {
                              "name": "City 5",
                              "id": "ausState1City5",
                              "area": "12345 sqkm"
                          },
                          {
                              "name": "City 6",
                              "id": "ausState1City6",
                              "area": "12345 sqkm"
                          }
                      ]
                  },
                  {
                      "name": "State 2 Australia",
                      "id": "ausState2",
                      "cities": [
                          {
                              "name": "City 7",
                              "id": "ausState2City7",
                              "area": "12345 sqkm"
                          },
                          {
                              "name": "City 8",
                              "id": "ausState2City8",
                              "area": "12345 sqkm"
                          }
                      ]
                  }
              ]
          }
      ],"name":"country"}
    ]    
}  


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            mobile:"",
            name2:"",
            email2:"",
            mobile2:"",
            fields:{},
            errors:{}
        }
        this.validator = new SimpleReactValidator({
            messages: {
                email: "Invalid mail Id",
                name: "Invalid Name",
                phone: "Invalid Phone Id",
            }
        });
    }
    handleChange = (event) => {
        let errors = {};
        let {name,value} = event.target;
        this.setState({
            [name]:value
        })
        if(this.state.name2 !== "")
        {
            errors["name2"] = ""
        }
        this.setState({
            errors:errors
        })
    }
    SubmitForm = (event) => {
        event.preventDefault()
        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
    }

    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let isValid = true;
        var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"; 

        if(this.state.name2 === "")
        {
            isValid = false;
            errors["name2"] = "Name not empty"
        }
        if(this.state.email2 === ""){
            isValid = false;
            errors["email2"] = "Email not empty"
            if(this.state.email2 !== this.state.email2 .match(pattern)){
                isValid = false;
                errors["email2"] = "Email not Valid"
            }
        }
        this.setState({
            errors:errors
        })
        return isValid;
    }

    FormSubmit2 = (event) => {
        event.preventDefault();
        var data = {
            name2:this.state.name2,
            email2:this.state.email2,
            mobile2:this.state.mobile2
        }
        if(this.handleValidation()){
        }
        else{

        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Form</h1>
                    <h2>simple-react-validator</h2>
                    <form onSubmit={this.SubmitForm}>
                        <div>
                            <label>Name</label>
                            <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                    
                            {/**********   This is where the magic happens     ***********/}
                            {this.validator.message('name', this.state.name, 'required|alpha',{ className: 'text-danger' })}
                        </div>
                        <div>
                            <label>Email</label>
                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                    
                            {/**********   This is where the magic happens     ***********/}
                            {this.validator.message('email', this.state.email, 'required|email', { className: 'text-danger' })}
                        </div>
                        <div>
                            <label>Mobile</label>
                            <input className="form-control" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                    
                            {/**********   This is where the magic happens     ***********/}
                            {this.validator.message('mobile', this.state.mobile, 'required|phone', { className: 'text-danger' })}
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
                <div className="container" style={{paddingTop:"100px"}}>
                    <form onSubmit={this.FormSubmit2}>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name2" value={this.state.name2} placeholder="Name here" onChange={this.handleChange} />
                            {<span style={{color:"red"}}>{this.state.errors["name2"]}</span>}
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name="email2" value={this.state.email2} placeholder="Email here" onChange={this.handleChange} />
                            {<span style={{color:"red"}}>{this.state.errors["email2"]}</span>}
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type="text" name="mobile2" value={this.state.mobile2} placeholder="Phone here" onChange={this.handleChange} />
                            {<span style={{color:"red"}}>{this.state.errors["mobile2"]}</span>}
                        </div>
                        <div>
                            <label>Gender</label>
                            <input type="radio" name="gender" value="male" />Male
                            <input type="radio" name="gender" value="female"/>Female
                            <input type="radio" name="gender" value="other"/>Other
                        </div>
                        <div>
                            <label>Hobbies</label>
                            <input type="checkbox" value="cricket"/>cricket
                            <input type="checkbox" value="volluball"/>volluball
                            <input type="checkbox" value="carrom"/>carrom
                            <input type="checkbox" value="tennis"/>tennis
                        </div>
                        <button>Submit</button>
                    </form>
                    <div className="flex">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                </div>
                <div className="container">
                <div className="table_wrap">
            <table>
                <tr className="orange_text">
                    <th>M</th>
                    <th>R</th>
                    <th>51-3</th>
                    <th>P</th>
                </tr>
                <tr className="table_head">
                    <th>Series</th>
                    <th>Insulator</th>
                    <th>Contacts**</th>
                    <th>Contact Gender</th>
                </tr>
                {
                        AllData.alldata.map((data ,i)=> {
                            // debugger
                            return(
                                <tr>
                                    <td key={i}><div>{data.name}</div></td>
                                    {
                                        data[data.name].map((innerData,i) => {
                                            console.log(innerData);
                                            // debugger
                                            return(
                                               <>
                                                    <td key={i}>{innerData.name} , {innerData.email} , {innerData.address && innerData.address.country},{innerData.cname}
                                                        {/* {
                                                           innerData.size && innerData.size.map((innerArr) => {
                                                                // debugger
                                                                return(
                                                                    <>
                                                                        {innerArr.large && innerArr.large.mashreeom}
                                                                        {innerArr.large && innerArr.large.chees}
                                                                        {innerArr.medium && innerArr.medium.tops}
                                                                        {innerArr.medium && innerArr.medium.catchup}
                                                                        {innerArr.small}
                                                                    </>
                                                                )
                                                            })
                                                        } */}
                                                    </td>
                                               </>
                                           )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

            </table>
        </div>
                </div>
            </div>
        );
    }
}

export default Form;