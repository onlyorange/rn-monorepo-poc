Quick Readme.
1) do a 'yarn install' in root folder. ( rn-monorepo-poc/)
2) navigate to packages/app/ and add a wml link. 
    - Install wml globally if you already haven't ( npm -i -g wml)
    - create a wml link of @tcp/core/ with .node_modules/@tcp/core to monitor file changes in core module.
        'wml add ../core ./node_modules/@tcp/core'.
3) navigate to package/app/ and do a 'react-native run-ios'
4) it should give you a haste map error for @tcp/core. close the metro bundler. and then solve it by doing a 'wml start' inside app/ repo.
5) then again do a 'react-native run-ios' in a different terminal inside app/ folder.
6) Emulator should run, If the emulator show "No Bundle URl". again execute 'react-native run-ios'.
7) If the RNGesturehandler error is shown on emulator. Fix it by linking binaries from XCode. through opening .xcodeproj file in ios folder of app/ directory and then run emulator again by 'react-native run-ios'
