declare module '*.svg' {
    import * as React from 'react';
    const value: React.FC<React.SVGAttributes<SVGElement>>;
    export default value;
}