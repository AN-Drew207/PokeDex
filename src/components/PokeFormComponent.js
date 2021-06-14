import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function PokeFormComponent (props){
    return(
        <div>
            <form 
                action="" 
                onSubmit={props.handleSubmit}
            >
                <div className="form-group 
                                row 
                                d-flex 
                                align-content-center 
                                justify-content-center"
                >
                    <div className="col-4                                 
                                d-flex 
                                align-content-center 
                                justify-content-center"
                    >
                        <input 
                            className="form-control"
                            type="text" 
                            name="name"  
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className="col-2
                                    d-flex 
                                    align-content-center 
                                    justify-content-center"
                    >
                        <button className="btn btn-primary button">
                            Find your Pokemon!
                        </button>   
                    </div>

                </div>
            </form>
        </div>

    )
}

export default PokeFormComponent 