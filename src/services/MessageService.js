import {message}  from 'antd';

export const showMessageSuccess = (text) => {
     message.success(text);
  };

  export const showError = (text) => {
    message.error(text);
 };
  
  export const showMessageError = (response) => {

    const error = response.errors && response.errors.length > 0 ? response.errors[0] : response.message;
    const errorMessage = error.key ? `${error.key} ${error.message}` : error.message;

    if( response.errors && response.errors.length > 0 ){
      
        const str = response.errors[0].message;
       const errorMessage = str.replace(/"[^"]*"/g, response.errors[0].key);
        message.error(errorMessage);
    }else{
        const errorMessage=response.message;
        message.error(errorMessage);
    }


  };
  