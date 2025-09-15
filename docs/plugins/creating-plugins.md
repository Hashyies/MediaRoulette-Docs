---
sidebar_position: 2
---

# Creating Plugins

This guide will walk you through the process of creating your own plugins for MediaRoulette.

## Introduction

Plugins are a great way to extend the functionality of MediaRoulette. You can create plugins to add new commands, content sources, or even integrate with other services. The plugin system is designed to be flexible and easy to use, so you can focus on building your amazing features.

## Getting Started

Before you start creating plugins, you will need to have the following installed:

- Java 17+
- Gradle

### Setting up a new plugin project

To create a new plugin project, you can use the following steps:

1.  **Create a new Gradle project:** You can use your favorite IDE to create a new Gradle project.

2.  **Add the MediaRoulette API as a dependency:** You will need to add the MediaRoulette API as a dependency to your project. You can do this by adding the following to your `build.gradle.kts` file:

    ```kotlin
    plugins {
        id("java")
        id("com.gradleup.shadow") version "9.0.2"
    }
    
    group = "me.myplugin"
    version = "1.0-SNAPSHOT"
    
    repositories {
        mavenCentral()
        maven { url = uri("https://jitpack.io") }
    }
    
    dependencies {
        shadow("com.github.MediaRoulette:MediaRoulette:v1.0.81")
        testImplementation(platform("org.junit:junit-bom:5.10.0"))
        testImplementation("org.junit.jupiter:junit-jupiter")
    }
    
    tasks.test {
        useJUnitPlatform()
    }
    
    tasks.jar {
        enabled = false
    }
    
    tasks.shadowJar {
        archiveClassifier.set("")
        manifest {
            attributes(
                "Main-Class" to "me.myplugin.Main",
                "Implementation-Title" to project.name,
                "Implementation-Version" to project.version
            )
        }
        mergeServiceFiles()
        exclude("META-INF/*.SF")
        exclude("META-INF/*.DSA")
        exclude("META-INF/*.RSA")
        duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    }
    
    tasks.build {
        dependsOn(tasks.shadowJar)
    }
    ```

3.  **Create the `plugin.yml` file:** Every plugin must have a `plugin.yml` file in its `src/main/resources` directory. This file contains metadata about your plugin.

    ```yaml
    name: MyPlugin
    version: 1.0.0
    main: me.myplugin.Main
    author: YourName
    description: An amazing new plugin.
    ```

4.  **Create the main plugin class:** The main plugin class is the entry point for your plugin. It must extend the `me.hash.mediaroulette.plugins.Plugin` class.

    ```java
    package me.myplugin;

    import me.hash.mediaroulette.bot.Bot;
    import me.hash.mediaroulette.plugins.Plugin;
    import me.myplugin.commands.MyCommand;

    public class Main extends Plugin {

        @Override
        public void onLoad() {
            Bot.addCommands(new MyCommand());
        }

        @Override
        public void onEnable() {
            getLogger().info("MyPlugin has been enabled!");
        }

        @Override
        public void onDisable() {
            getLogger().info("MyPlugin has been disabled!");
        }
    }
    ```

## The `plugin.yml` file

The `plugin.yml` file is a crucial part of your plugin. It contains the following properties:

- `name`: The name of your plugin. This must be unique.
- `version`: The version of your plugin.
- `main`: The main class of your plugin.
- `author`: The author of the plugin.
- `authors`: A list of authors of the plugin.
- `description`: A short description of your plugin.
- `depend`: A list of plugins that your plugin depends on.
- `softdepend`: A list of plugins that your plugin can optionally depend on.

## The Main Plugin Class

The main plugin class is the heart of your plugin. It extends the `Plugin` class and provides the `onLoad()`, `onEnable()`, and `onDisable()` methods, which are called when your plugin is loaded, enabled, or disabled.

### `onLoad()`

The `onLoad()` method is called when your plugin is loaded. This is where you should register your commands.

### `onEnable()`

The `onEnable()` method is called when your plugin is enabled. This is where you should register your event listeners and other components.

### `onDisable()`

The `onDisable()` method is called when your plugin is disabled. This is where you should unregister your components and perform any necessary cleanup.

For more information on how to add commands and content providers, please refer to the following sections:

- [Adding Commands](./adding-commands.md)
- [Adding Content Providers](./adding-content-providers.md)

## Building and Distributing

To build your plugin, you can use the `gradlew build` command. This will create a JAR file in the `build/libs` directory. This JAR file is a "fat JAR", which means it contains all of your plugin's dependencies.

You can then distribute this JAR file to other users. To install the plugin, they simply need to place the JAR file in the `plugins` directory of their MediaRoulette installation.