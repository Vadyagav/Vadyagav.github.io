import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: props.logo,
            name: props.name,
            company: props.company,
            location: props.location,
            bio: props.bio
        }
    }

    changeName = ({ target }) => this.setState({
        name: target.value,
    });

    changeCompany = ({ target }) => this.setState({
        company: target.value,
    });

    changeLocation = ({ target }) => this.setState({
        location: target.value,
    });

    changeBio = ({ target }) => this.setState({
        bio: target.value,
    });

    handleSubmit(event) {
        const { onChange, toggleView } = this.props;
        event.preventDefault();
        if (typeof onChange !== 'function') return;
        onChange(this.state);
        toggleView();
    }

    render() {
        const { name, company, logo, location, bio } = this.state;
        const { toggleView } = this.props;
        return (
            <form className="row" onSubmit={this.handleSubmit.bind(this)}>
                <div className="col-md-4">
                    <img
                        className="img-thumbnail"
                        src={logo}
                        alt={name}
                    />
                </div>
                <div className="col-md-8">
                    <div className="form-group">
                        <label htmlFor="name">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="User Name"
                            value={name}
                            onChange={this.changeName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            className="form-control"
                            id="company"
                            placeholder="Company"
                            value={company}
                            onChange={this.changeCompany}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            placeholder="Location"
                            value={location}
                            onChange={this.changeLocation}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            className="form-control"
                            id="bio"
                            placeholder="Some user bio"
                            value={bio}
                            onChange={this.changeBio}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="reset"
                            onClick={toggleView}
                            className="btn btn-danger"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-success">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default UserForm;
