import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myRoute';
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login/" component={Login} />
      <MyRoute exact path="/" component={Alunos} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/:id/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/register/" component={Register} />

      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
