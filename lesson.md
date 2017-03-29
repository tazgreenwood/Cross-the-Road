# Cross The Road
In HTML using id's and classes you will be able to create a game. In this game you will use the arrow keys to help Isaac navigate his way across a very busy road.



## Step 1: Create Your Character
The name of the character that you will be using is Isaac. Isaac is an image. Create an `img` tag. The src for the picture is the url: `http://codechangers.com/lessons/isaac.png`.

Apart from creating the `img` tag, you will also have to give the image an `id` of `isaac`. In order to move him around the screen.

### Objectives
* Add an `img` tag to the body.
* Assign the `id` of `isaac` to the `img`




## Step 2: Create the Starting Line
You will need a safe zone for Isaac to start in. Use a `div` tag for the starting line.

The start `div` needs a class so that it can be styled properly. You need to assign the div you just created an `id` of `start`.

### Objectives
* Add a `div` tag to the body
* Assign the `id` of `start` to the `div`



## Step 3: Creating the Road
Get used to the `div` tag because you are going to be using it a lot from here on out. To create the road you will need to use a `div` tag. To make the road look different from the starting line that you just created you need to give it an `id` of `road`.

### Objectives
* Add a `div` tag to the body
* Assign the `id` of `road` to the `div`



## Step 4: Creating the Finish Line
You need to create a safe place to reach in order to successfully cross the road. The finish line is the similar to the start line. You need to create a `div` tag and assign it a `id` of `finish`.

### Objectives
* Add a `div` tag to the body
* Assign the `id` of `finish` to the `div`



## Step 5: Creating your First Car
Creating a car is basically the same as what you have already done up to this point. However, because you will have multiple cars that function and look very similar you will use a `class` instead of an `id`.

The car has to drive on the road, so make sure that you add the new tags inside of the `div` for the road.

Create another `div` tag to represent the car. You need to assign this `div` tag a class of `car`. This will create a generic car. Give the same `div` tag another class of `green`, which will change the car to a faster green car.

You can assign two class values by doing this: `class="class1 class2"`.

### Objectives
* Add a `div` tag inside of the road.
* Assign the `classes` `car` and `green` to the `div`



## Step 6: Creating Road Lines
Adding the dashed lines to the road is pretty simple. Underneath the green car that you just added you need to add an `hr` tag.

### Objectives
* Add an `hr` tag inside of the road



## Step 7: Putting it Together
You will now combine what you have learned in steps 4 and 5 to create a new car and another set of lines on the road.

Create a new `div` tag for the car and give it a `car` class and a `redtruck` class. This will create a red truck on the road.

Now create another set of dashed lines on the road using an `hr` tag.

### Objectives
* Add a `div` tag inside of the road.
* Assign the `classes` `car` and `redtruck` to the `div`
* Add an `hr` tag inside of the road



## Step 8: Adding Two More Cars
Now that you can create cars pretty easily you are going to add two more to the road.

Create another car using a `div` tag and assign it a `car` class and a `greytruck` class.

Now add some more lines to the road using the `hr` tag.

Create one more car using a `div` tag, but only assign this car the class of `car`.

Don't add anymore lines after the second car.

### Objectives
* Add two `div` tags inside of the road.
* Assign the `classes` `car` and `greytruck` to a `div`
* Assign the `class` `car` to a `div`
* Add an `hr` tag between the two `div` tags



## Step 9: Adding a Curb to the Road
Creating a curb is nothing new. You will still be using a `div` tag, but this `div` needs a `class` of `curb`. You use a class here because there could be multiple curbs in your game. For now just add one.

### Objectives
* Add a `div` tag to the road
* Assign the `class` `curb` to the `div`



## Step 10: Create Your Own Section of Road
Using what you have learned you will create your own section of road. You need to add four cars after the curb. Also, make sure to add dashed lines to the road between each of the four cars.

You can choose whichever of the four types of cars that you would like. Make sure that you are still using the `car` `class`.

### Objectives
* Add four cars to the road
* Add three sets of lines between the cars
