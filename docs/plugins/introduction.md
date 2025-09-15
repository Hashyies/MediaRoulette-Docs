---
sidebar_position: 1
---

# Introduction to Plugins

MediaRoulette's plugin system allows you to extend the bot's functionality with custom features. You can create your own plugins or use plugins created by the community.

## What are Plugins?

Plugins are self-contained modules that add new features to MediaRoulette. They can be used to:

- Add new commands
- Create new content sources
- Integrate with other services
- And much more!

## The Plugin System

The plugin system is built around a `PluginManager` that handles the loading, enabling, and disabling of plugins. Each plugin has its own lifecycle and can be managed through a set of terminal commands.

### Plugin Lifecycle

Each plugin has the following lifecycle methods:

- `onLoad()`: Called when the plugin is loaded.
- `onEnable()`: Called when the plugin is enabled.
- `onDisable()`: Called when the plugin is disabled.

### `plugin.yml`

Every plugin must have a `plugin.yml` file in its root directory. This file contains information about the plugin, such as its name, version, and main class.

```yaml
name: MyPlugin
version: 1.0.0
main: me.myplugin.MyPlugin
```

## Image Source Plugins

MediaRoulette has a special interface for plugins that provide new image sources. By implementing the `ImageSourcePlugin` interface, you can easily add new sources to the `/random` command.

## Getting Started

To get started with plugin development, you will need:

- Java 17+
- Gradle

For more information on how to create your own plugins, please refer to the [Plugin Development](./creating-plugins) section.
