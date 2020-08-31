declare module '*.svg' {
    import * as React from 'react';
    const value: React.FC<React.SVGAttributes<SVGElement>>;
    export default value;
}

declare function describe(description: string, specDefinitions: () => void): void;

declare function it(description: string, specDefinitions: () => void): void;

declare let expect: any;