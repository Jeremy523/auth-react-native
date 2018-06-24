# **Project:** auth-react-native
## How to get up and running

#### Step 1: Cloning the project
Find a suitable directory for this project. We can call it _workspace_, for instance.
Once that's done, open up a bash terminal (or any terminal with git installed), and navigate to that directory:
```sh
$ cd ~/path/to/directory/workspace
```
Now we can clone the repository to this location like so:
```sh
$ git clone git@github.com:Jeremy523/auth-react-native.git
```
After cloning the repo, you should now have a new directory, called _auth-react-native_ containing the project.
> **NOTE:** Make sure your machine has an SSH key linked up to github. Find instructions for key generation and linking [here](https://help.github.com/articles/connecting-to-github-with-ssh/).
> If you have any issues with not being allowed to push any commits, that should be solved once you're added as a contributor to the project.

#
#### Step 2: Getting the emulator open
Assuming you've already installed all the necessary software and tools shown [here](https://facebook.github.io/react-native/docs/getting-started.html), you should be ready to begin.
Remember not to follow the "_Quick Start_" option.
> **NOTE:** This step is only necessary if you're running the Android emulator.
If you are developing only for iOS, install XCode and then you should skip this step as the iOS emulator launches automatically in OSX.

Launch Android Studio. Select **_Tools_**, then **_AVD Manager_**. This window will list all Android virtual devices.
If you already have an Android virtual device that is **_NOT_** API 23, **_IGNORE IT_**. React native works with the Android API 23.

Select the option to **_Create Virtual Device_** and select a device to emulate (I recommend the Pixel 2, for example).
Next, you should be prompted to **_Select a System Image_**. You should select the **_Android 6.0 (Google APIs)_** target, which is under the release name "Marshmallow", uses API 23, and is an x86 image (_if this release doesn't show up in the **Recommended** tab, check in the **x86 Images** tab_).

Once the virtual device has been successfully created, it should now appear in the AVD Manager window. All that is now left to do is press the green play button to launch it (_You will only have to open this window and launch the device when you start development and it is closed; it acts as a server running on a specific port on your machine, so it doesn't need to be closed and reopened during a development session_).

#
#### Step 3: Building and running the project on the virtual device
If you are developing for Android, make sure to have a virtual device open.
In a terminal / command prompt window, run the command: 
```sh
$ react-native start
```
This should launch **_Watchman_** (if you have it installed), which watches the working directory for file changes, and rebuilds the project as you save your progress in your IDE. 

Now, in a separate terminal / command prompt window, navigate to the project directory and then you should be ready to build the project and run it on the emulator.

If you're developing for iOS on a mac, run:
```sh
$ react-native run-ios
```
If you're developing for Android on Windows, run:
```sh
$ react-native run-android
```
If you're developing for Android on Linux, run:
```sh
$ npm run android-linux
```
> **NOTE:** Linux required a bit more work to build to the device (at least for me), so this has been simplified via a script in the **package.json** file called "android-linux", hence the different command.
#
If all goes to plan, the app should build and launch on the device!

Another piece of good news (if you have Watchman installed) is that building the app via this "run" command only needs to be done once per development session. After it has been built, Watchman should trigger a rebuild of the app everytime a file in the project is changed.

Thus, any code changes should be apparent when you refresh the virtual device. 
To do this on Android, double tap "R". For iOS, press "⌘R".
