const initialState = {
  items: [],
  individContact: {},
  token: localStorage.getItem('token'),
  login: '',
  password: '',
  error: false,
  filter: '',
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

    case 'set/login':
      return {
        ...state,
        login: action.payload,
      };
    case 'set/password':
      return {
        ...state,
        password: action.payload,
      };
    case 'logIn/succeed':
      return {
        ...state,
        token: action.payload,
        error: false,
      };
    case 'logIn/error':
      return {
        ...state,
        error: true,
      };
    case 'set/Filter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

//санки

//авторизация
export const logIn = (login, password) => {
  return (dispatch) => {
    dispatch({
      type: 'logIn/start',
    });
    fetch(
      `http://localhost:3005/authorization/login=${login}/password=${password}`,
    )
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem('token', json);
        dispatch({
          type: 'logIn/succeed',
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
        return dispatch({ type: 'logIn/error' });
      });
  };
};

export const setLogin = (login) => {
  return {
    type: 'set/login',
    payload: login,
  };
};

export const setPassword = (password) => {
  return {
    type: 'set/password',
    payload: password,
  };
};

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

//фильтрация

export const setFilter = (text) => {
  return {
    type: 'set/Filter',
    payload: text,
  };
};
