import PropTypes from 'prop-types';
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, removeContact }) {
    return (
        <ul className={styles.list}>
            {contacts.map(({ id, name, number }) => (
                <li className = {styles.item} key={id}>
                    <p>
                        {name}: {number}
                    </p>
                    <button
                        className={styles.button}
                        type="button"
                        onClick={() => removeContact(id)}
                    >delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    removeContact: PropTypes.func.isRequired,
};