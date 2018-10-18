import { Grid } from 'mauerwerk';
import * as React from 'react';
import proposal1Image from './photos/proposal1.jpg';
import proposal2Image from './photos/proposal2.jpg';
import proposal3Image from './photos/proposal3.jpg';
import proposal4Image from './photos/proposal4.jpg';
import proposal5Image from './photos/proposal5.jpg';
import proposal6Image from './photos/proposal6.jpg';

const gallery = [
  { src: proposal6Image },
  { src: proposal5Image },
  { src: proposal4Image },
  { src: proposal3Image },
  { src: proposal2Image },
  { src: proposal1Image },
];
export class PhotoGalary extends React.Component {
  render() {
    return (
      <div>
        <Grid
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={gallery}
          // Key accessor, instructs grid on how to fetch individual keys from the data set
          keys={d => d.src}
          // Can be a fixed value or an individual data accessor (for variable heights)
          // If you leave it undefined it will assume 100% container height
          heights={d => 200}
          // Optional: number of columns (make it responsive yourself using react-measure/react-media)
          columns={3}
          // Optional: space between elements
          margin={20}
          // Optional: removes the possibility to scroll away from a maximized element
          lockScroll={false}
          // Optional: delay before minimizing an opened element
          closeDelay={500}
          // Optional: animates the grid in if true (default)
          transitionMount={true}
        >
          {(data, open, toggle) => (
            <div onClick={toggle}>
              <img src={data.src} style={{ width: '100%' }} />
            </div>
          )}
        </Grid>
      </div>
    );
  }
}
