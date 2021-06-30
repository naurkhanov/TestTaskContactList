const initialState = {
  items: [],
  individContact: {},
  token: true,
};

export const application = (state = initialState, action) => {
  switch (action.type) {
    case 'load/contacts/success':
      return {
        ...state,
        items: action.payload,
      };

    case 'load/individ/contact/success':
      return {
        ...state,
        individContact: action.payload,
      };
    case 'set/contact/success':
      return {
        ...state,
        individContact: action.payload,
      };
    case 'add/contact/success':
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case 'delete/contact/success':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

//санки

//подгрузка данных
export const loadContacts = () => {
  return (dispatch) => {
    dispatch({
      type: 'load/contacts/start',
    });
    fetch('http://localhost:3005/contacts')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/contacts/success',
          payload: json,
        });
      });
  };
};

//подгрузка данных по id
export const loadIndividContact = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'load/individ/contact/start',
    });
    fetch(`http://localhost:3005/contacts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/individ/contact/success',
          payload: json,
        });
      });
  };
};

//изменение контактов
export const setContact = (id, firstName, lastName, phoneNumber) => {
  return (dispatch) => {
    dispatch({
      type: 'set/contact/start',
    });
    fetch(`http://localhost:3005/contacts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      }),
    })
      .then((response) => response.json())
      .catch((json) => {
        dispatch({
          type: 'set/contact/success',
          payload: json,
        });
      });
  };
};

//добавление контактов

export const addContact = (firstName, lastName, phoneNumber) => {
  return (dispatch) => {
    dispatch({
      type: 'add/contact/start',
    });
    fetch(`http://localhost:3005/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: '',
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'add/contact/success',
          payload: json,
        });
      });
  };
};

//удаление

export const deleteContact = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'delete/contact/start',
    });
    fetch(`http://localhost:3005/contacts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: 'delete/contact/success',
          payload: id,
        });
      });
  };
};
