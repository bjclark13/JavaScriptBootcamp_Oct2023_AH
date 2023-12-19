Some best practices:
1. Only export / import what you need
Bundlers (converting code into production) only imports the code that actually used.

2. Classes / Interfaces are PascalCase (capital), variables are camelCase
General convention for all of JavaScript.

3. Files and folders can be kebab-case or camelCase, but stay consistent
In React, the name of the file matches the name of the class that you're export.

4. Separate classes logically into their own files

3. Avoid using `any` types as much as possible

4. Use getters and setters (functions) for accessing private variables as much as possible
Allows to add our logic for conditionally setting, or modify as we save.

5. Use types rather than strings when possible
