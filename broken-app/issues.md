# Broken App Issues
- Changed package variables to const insteasd of let or var.
-  Lines 6 and 7 were missing from the file causing an error with how the req came in.
-  Adding async on line 9 allows us to add await into line 12
-  Remap out results within a Promis.all because it was trying to call r.data before the promise was resolved.
-  Needed to return out within Promise.all for the same reaon listed above
-  Catch block was missing err param 
-  Needed to export app to test outside of file.