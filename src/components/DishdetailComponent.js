import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
const Dishdetail = (props) => {

    { this.renderDish(dish) }
    const { dish } = props;
    return (
        <React.Fragment>
            {renderDish(dish)}

    </div>
    );
}
    </React.Fragment >
);    
}

function formatDate(date) {
    const option = { year: 'numeric', month: 'short', day: 'numeric' };
    const date1 = new Date(date)
    const newdate = date1.toLocaleDateString("en-US", option)
    return newdate;

}

renderDish = (dish) => {
    if (dish != null) {
        return (
            <React.Fragment>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1" >
                    <h4>Comments</h4>
                    {this.renderComments(dish.comments)}
                </div>
            </React.Fragment>
        )
    }
    else {
        return (<div></div>)
    }
}

renderComments = (comments) =>
const renderComments = (comments) => {

    if (comments != null)
        @@ -53, 7 + 33, 7 @@class Dishdetail extends Component {
            return(
            <React.Fragment>
            <li>{co.comment}</li><br />
            <li>-- {co.author}, {this.formatDate(co.date)}</li><br />
            <li>-- {co.author}, {formatDate(co.date)}</li><br />
            </React.Fragment >
        )

    @@ -70, 16 + 50, 32 @@class Dishdetail extends Component {
    }
}

formatDate(date)
{
    const option = { year: 'numeric', month: 'short', day: 'numeric' };
    const date1 = new Date(date)
    const newdate = date1.toLocaleDateString("en-US", option)
    return newdate;

}
}

const renderDish = (dish) => {
    if (dish != null) {
        return (
            <React.Fragment>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1" >
                    <h4>Comments</h4>
                    {renderComments(dish.comments)}
                </div>
            </React.Fragment>
        )
    }
    else {
        return (<div></div>)
    }
}


export default Dishdetail;