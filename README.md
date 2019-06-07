# rn-monorepo-poc
1) in root mono-repo run - lerna bootstrap. after the modules are install.
2) navigate to packages/app/ and run - wml add ../core ./node_modules/@tcp/core
3) then do a wml start. keep it running.
4) in other terminal run- react-native run-ios.