# Yarn  Command

### Create a new package,or a new package in the local directory
`yarn init
`

### Install the project dependencies
`yarn install`

## Connect the local project to another one.
`yarn link <destination>
`

### Run node with the hook already setup.
`yarn node ...
`

### Perform a vulnerability audit against the installed packages
`yarn npm audit
`

## Show information about a package
`yarn npm info ...
`

### Show all available information about react (except the dist, readme, and users fields) :
`yarn npm info react`

## List the available official plugins
`yarn plugin list
`

### Remove a plugin.
`yarn plugin remove <name>
`

## List the active plugins.
`yarn plugin runtime`

### Rebuild the project's native packages.
`yarn rebuild ...
`

### Rebuild all packages :
`yarn rebuild
`

## Remove dependencies from the project
`yarn remove ...`

### Run a script defined in the package.json.
`yarn run <scriptName> ...
`

### Lock the Yarn version used by the project
`yarn set version <version>
`

## Download the latest release from the Yarn repository :
`yarn set version latest
`

### Download the latest classic release from the Yarn repository :
`yarn set version classic`

## Force the unpacking of a list of packages
`yarn unplug ...
`

## Upgrade dependencies across the project.
`yarn up ...
`

## Check whether the modified packages need a bump 
`yarn version check
`

## yarn set version
`yarn set version <version>
`

### Download the latest release from the Yarn repository 
`yarn set version latest
`

### Switch back to a specific Yarn 1 release
`yarn set version 1.22.1
`

### Download a specific Yarn 2 build 
`yarn set version 2.0.0-rc.30`

## Add dependencies to the project.
`yarn add ...`

### Display the current configuration.
`yarn config
`
### Check that the project constraints are met.
`yarn constraints`

### Autofix all unmet constraints :
`yarn constraints --fix`

### See information related to packages
`yarn info ...
`