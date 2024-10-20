import PropTypes from "prop-types";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { MdSupervisedUserCircle } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(deleteContact(id));
  return (
    <div className={css.contact_panel} id={"contact-" + contact.id}>
      <div>
        <div className={css.contact_field}>
          <MdSupervisedUserCircle />
          {contact.name}
        </div>
        <div className={css.contact_field}>
          <MdLocalPhone />
          {contact.phone}
        </div>
      </div>
      <div>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </div>
  );
}

let ContactItem = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
});

Contact.propTypes = {
  contact: ContactItem,
};
