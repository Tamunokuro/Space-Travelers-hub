import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const Missions = () => (
  <Container className="pt-3">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={1}>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td className="w-auto">lojejnnr gnggnmg gngnkgkgngntnitng  gjngjtn  gjngmfnfjnf  jngjntnr jnrjnrjnf  krnjtntkn jrjnrm r jrnjbtjnt</td>
          <td className="w-auto">Otto</td>
          <td className="w-auto">@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>thesksn sjksnjn sjjkdiiheheiksjj</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default Missions;
