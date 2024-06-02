import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('es');

I18n.putVocabularies({
es: {
    'Sign In': 'Ingresar',
    'Sign Up': 'Regístrate',
    'Please confirm your Password': "Confirme su Contraseña",
    'Name': 'Nombre',
    'Enter your Name': 'Ingrese su Nombre',
    'Middle Name': 'Segundo Nombre',
    'Enter your Middle Name': 'Ingrese su Segundo Nombre',
    'Family Name':'Apellidos',
    'Enter your Family Name': 'Ingrese sus Apellidos',
},
});
