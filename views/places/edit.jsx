const React = require('react');
const Def = require('../default');

function editPlace(data){
    return(
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="row">
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id="name" name="name" defaultValue={data.place.name} required></input>
                        </div>
                        <div className='fform-group col-sm-6'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className='form-control' id="pic" name="pic" defaultValue={data.place.pic}></input>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='fform-group col-sm-4'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id="city" name="city" defaultValue={data.place.city}></input>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='state'>State</label>
                            <input className='form-control' id="state" name="state" defaultValue={data.place.state}></input>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="founded">Founding Year</label>
                            <input className="form-control" id="founded" name="founded" value={data.place.founded} />
                        </div>    
                    </div>

                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input className='form-control' id="cuisines" name="cuisines" defaultValue={data.place.cuisines} required></input>
                    </div>
                        
                    <input className='btn btn-primary' type="submit" value="Submit Changes"></input>
                </form>
            </main>
        </Def>
    )
};

module.exports = editPlace;