Create a new OAuth registration to access GitHub API, otherwise max 50 requests/hr
https://github.com/settings/applications/new
Generate the secret access key to be used later for AJAX calls

Client ID
f530a5eb462293ef7315
Client secret 
bb95e78058203bdb1dd09c380099d78d77ce46bb

For html use bootstrap starter template

getbootstrap.com and then starter template, press ctrl+u, html opens copy and paste, remove all the unnecessary html and css(keep the navigation bar intact)
Then go to bootswatch , go to simplex click on download open minified and copy the url and place it on stylesheet

Go to bootstrap cdn and copy the url and paste it on script tag
Add jquery by going to jquery cdn 3.1 uncompressed copy and paste, make sure it is there above other script tags

Add the nav bar, add div tags to reflect go to javascript and start writing jquery

Now instead of OAUTH use personal access token to autenticate , generate and add it to ajax request

To show the name properly let's use bootstrap panels , search bootstrap components, panels and panels with a header, select 2nd part only 

add thumbanil calss to img
col-md-3: This class specifies that the element should take up 3 grid columns on medium-sized screens and larger (md stands for medium). This class is typically used within a row to create a column that is one-fourth (1/4) of the total width of its container.

col-md-6: This class specifies that the element should take up 6 grid columns on medium-sized screens and larger. This class is typically used within a row to create a column that is half (1/2) of the total width of its container.

<div class="col-md-3">
                <!-- Content for the first column -->
            </div>
            <div class="col-md-6">
                <!-- Content for the second column -->
            </div>
            <div class="col-md-3">
            In this example, on medium-sized screens and larger, the first column will take up 1/4 of the container's width, the second column will take up 1/2, and the third column will take up 1/4.





