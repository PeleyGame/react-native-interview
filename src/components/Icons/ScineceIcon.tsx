import * as React from 'react';
import type {SvgProps} from 'react-native-svg';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const ScineceIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <G fill="#545469" clipPath="url(#a)">
      <Path d="M13.645 8.435c-.095-.145-.195-.29-.3-.435-.1-.14-.2-.285-.31-.425a17.44 17.44 0 0 0-.65-.82 23.459 23.459 0 0 0-3.13-3.135 8.568 8.568 0 0 0-.416-.33l.211-.139c.26.215.587.349.95.349.827 0 1.5-.673 1.5-1.5 0-.048-.01-.093-.014-.139.62-.233 1.189-.361 1.674-.361.45 0 .79.11 1.01.33.505.51.425 1.685-.22 3.15-.25.565-.565 1.15-.945 1.74.225.28.44.565.64.845.5-.74.91-1.475 1.22-2.18.84-1.915.844-3.425.01-4.26C14.46.71 13.885.5 13.16.5c-.615 0-1.324.16-2.09.454A1.492 1.492 0 0 0 10 .5a1.502 1.502 0 0 0-1.47 1.795c-.032.02-.063.038-.095.06-.145.095-.29.195-.435.3-.145-.105-.29-.205-.435-.3C5.805 1.18 4.12.5 2.84.5c-.725 0-1.3.21-1.715.625C-.06 2.305.49 4.8 2.34 7.56c.1.145.2.295.31.44-.105.15-.21.295-.305.445-1.86 2.76-2.4 5.255-1.22 6.43.415.415.99.625 1.715.625 1.28 0 2.965-.68 4.725-1.855.145-.095.29-.195.435-.3.145.105.29.204.435.3 1.76 1.175 3.445 1.855 4.725 1.855.724 0 1.3-.21 1.715-.625.835-.835.83-2.345-.01-4.26-.31-.705-.72-1.44-1.22-2.18ZM1.83 1.83c.22-.22.56-.33 1.01-.33 1.02 0 2.405.55 3.88 1.495.145.095.295.19.44.295-.135.105-.275.22-.41.33-.555.455-1.105.955-1.64 1.49a24.795 24.795 0 0 0-1.83 2.045c-.105-.15-.2-.3-.29-.445-1.455-2.28-1.855-4.18-1.16-4.88ZM6.72 13c-1.48.95-2.86 1.5-3.88 1.5-.45 0-.79-.11-1.01-.33-.695-.7-.29-2.6 1.16-4.88.09-.145.19-.295.29-.445.095-.14.195-.28.3-.426 0 0 0-.005.005-.01.095-.135.2-.275.305-.41.105-.135.21-.27.325-.404a22.13 22.13 0 0 1 3.38-3.375c.135-.11.27-.215.405-.32.135.1.27.205.405.32.6.48 1.2 1.015 1.78 1.595.58.58 1.114 1.175 1.6 1.775.11.135.22.275.32.41-.105.135-.21.275-.32.41-.48.6-1.02 1.195-1.6 1.775-.58.58-1.18 1.114-1.78 1.595-.135.11-.27.215-.405.32-.135-.1-.27-.205-.405-.32-.073-.059-.146-.126-.22-.186.08-.182.125-.383.125-.594 0-.827-.673-1.5-1.5-1.5-.244 0-.472.064-.676.168A23.6 23.6 0 0 1 4.21 8.405c-.105.14-.21.28-.3.415 0 0-.005 0-.005.005a7.07 7.07 0 0 0-.295.425c.316.383.662.761 1.022 1.141A1.484 1.484 0 0 0 4.5 11c0 .827.673 1.5 1.5 1.5.248 0 .478-.066.684-.173l.061.053c.135.114.275.224.415.33-.15.1-.295.2-.44.29Zm7.45 1.17c-.22.22-.56.33-1.01.33-1.02 0-2.406-.55-3.88-1.495-.146-.095-.296-.19-.44-.295a22.639 22.639 0 0 0 2.05-1.82 21.67 21.67 0 0 0 1.494-1.645c.115-.135.225-.27.33-.405.1.145.2.295.29.44.38.59.695 1.176.945 1.74.646 1.465.726 2.64.22 3.15Z" />
      <Path d="M8 9.5c.827 0 1.5-.673 1.5-1.5S8.827 6.5 8 6.5 6.5 7.173 6.5 8 7.173 9.5 8 9.5Zm0-2a.5.5 0 1 1-.002 1.002A.5.5 0 0 1 8 7.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ScineceIcon;
