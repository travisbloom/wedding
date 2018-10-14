import * as React from 'react';
import { HeaderVideo } from 'src/components/HeaderVideo/HeaderVideo';
import { PhotoGalary } from 'src/components/PhotoGallery/PhotoGallery';
export class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderVideo />
        <PhotoGalary />
      </div>
    );
  }
}
