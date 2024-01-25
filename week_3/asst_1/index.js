
//dependencies are required to run
//devDependencies are only required when developing
//both use npm install, but devDepenecies requires npm install npm i --save-dev

console.log('Npm Script Test');


/** describe the important of the versionm field in package.json
 *  
 * Semantic versioning allows other developers who are working with the code to understand
 * the update type of the package in the dependencies. Semantic versions matter with packages
 * as each incrament has a specific meaning. For example if we have a first release of 1.0.0,
 * incramenting the 3rd digit to 1.0.1 indicates a patch release. Incramenting the 2nd digit 
 * and resetting the 3rd digit to 0 indicates a minor release. Lastly, incramenting the first digit
 * and resetting the last 2 digits will indicate a major release.  A caret symbol (^) would indicate that
 * the npm should restrict upgrates to patch or minor level updates. For example, if we used
 * "^5.0.2", npm would allow udates to 5.1.0 or 5.0.3, but not to another major version like 6.0.0.
 * The Tilde symbol (~) indicates that we should only recieve updates at the patch level. For 
 * example if we used "~5.0.2", we could obtain 5.0.3 but not 5.1.0.
 */

/** Describe how the fields such as repository, keywords, author, and license are useful for package 
 *  distribution and maintenance
 *
 *  Repository is useful so that people who want to contribute can find where the code lives. The keywords 
 * is just an array of strings that allow people to discover the package in npm search. The author can allow
 * people that use the package to know who created the package and possibly how to contact them. The license
 * allows people to know how the package can be used since the the author places specific restrictions on packages.
 */

/** Describe why it's important to include package-lock.json files for version control
 * 
 * Package-lock.json files are important to version control because if a person downloads the package in the future,
 * the versions of the dependencies at the time could be very different from when the package was developed. To prevent
 * the package from breaking, the package-lock.json file ensures that the dependencies installed will be the same version
 * as when it was being developed.
 */