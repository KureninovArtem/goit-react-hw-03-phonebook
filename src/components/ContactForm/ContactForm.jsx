import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
    state = {
    name: '',
    number: '',
    };

    handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
    };


    render() {
    const { name, number } = this.state;
    return (
        <form className={styles.form} onSubmit={this.handleSubmit}>
            <label className={styles.label}>
                Name
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Artem Artemiev"
                />
            </label>
            <label className={styles.label}>
                Number
                <input
                    className={styles.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    placeholder="000-00-00"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={styles.button} type="submit">
                Add contact
            </button>
        </form>
    );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
