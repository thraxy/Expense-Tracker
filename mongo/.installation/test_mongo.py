"""
This script will test mongodb installation. It will perform all 4 CRUD operations, then prompt the user to verify that
the database and collection exist prior to dropping them both. The collection will be empty, but the output stream will
display (READ) the new (CREATE) document from the collection, UPDATE that document, READ the document post-UPDATE, then
DELETE that document, leaving the db and collection.

Before it does any of that, however, it leverages os.system() return values to determine if pip is installed. If it is,
it will <pip install pymongo>, this will run whether pymongo is installed already or not. If pip is not installed, it
will check if python is installed just to be of use to the user, should this portion of the script not work.
It should be understood that this portion of the script exists SOLELY to allow for the `import pymongo`, so this script
may be executed on machines where pymongo is not installed.
"""
import os
import sys

ret_pip_version_call = os.system("pip --version")
if ret_pip_version_call == 0:
    ret_pip_install_pymongo = os.system("pip install pymongo")
    if ret_pip_install_pymongo == 0:
        print("Pymongo installed successfully")
    else:
        print("pip install failed, see an adult...")
        sys.exit(1)
else:
    print("pip may not be installed...", end='')
    ret_python_version_Call = os.system("python --version")
    if ret_python_version_Call == 0:
        print("but python IS installed, that's weird...exiting.")
    else:
        print("but python isn't installed, please visit \"https://www.python.org/downloads/\" and install python.")
    sys.exit(1)

import pymongo

g_mongo_local_host = 'mongodb://localhost:27017/'


def main():
    # ~~Variables~~
    test_1 = "test_1"
    test = "Test"
    how_many_tests = "HowManyTests"
    is_test = "IsThisATest"
    create_test_string = "This is also a test."
    update_test_string = "This is an automated test."

    client = pymongo.MongoClient(g_mongo_local_host)  # Opens connection to 'mongodb://localhost:27017/'

    # CREATE op
    test_1_database = client[test_1]  # Sets db name
    test_1_collection = test_1_database[test_1]  # Sets collection name
    test_1_collection.insert_one({
        test: create_test_string,
        how_many_tests: 2,
        is_test: True})  # CREATE new document in db.collection

    # READ op
    read_return = test_1_collection.find_one()  # Gets the only document existing within the collection
    print(read_return)  # READ to user the document

    # UPDATE op
    test_1_collection.update_one({
        is_test: True},
        {"$set": {test: update_test_string}})  # UPDATE the CREATED document

    # Verification of update ==> re-READ the document
    update_verification_return = test_1_collection.find_one()
    print("The updated collection document is:\n" + str(update_verification_return))

    # DELETE op
    test_1_collection.delete_one({is_test: True})  # Deletes the document

    client.close()


if __name__ == '__main__':
    # CRUD (Create Read Update Delete) operations
    star_bar = ("**********************************************************"
                "****************************************************")
    print(
        star_bar +
        "*\tThis program will check if you have `pip` installed, then it will install `pymongo`."
        "*\tAfter this it will connect to mongoDB and perform all four CRUD operations on the local database."
        "*\tIt will display some of this information on the screen, then it will ask you to perform a few simple tasks."
        "*\tThen it will provide a status."
        + star_bar +
        "[[press any key to continue]]"
    )
    input()
    main()
    print(
        star_bar +
        "*\tPlease open MongoDB compass."
        "*\tPlease refresh \"Databases\"."
        "*\tPlease indicate (Y)es, or (N)o, if you see \"test_1\""
        + star_bar
    )
    see_test_1_db = input()
    if see_test_1_db in (affirmative := ["y", "Y", "yes", "YES", "Yes"]):
        print(
            star_bar +
            "*\tPlease indicate (Y)es, or (N)o, if within \"test_1\" you see a collection ALSO named \"test_1\""
            + star_bar
        )
        see_test_1_collection = input()
        if see_test_1_collection in affirmative:
            print(
                star_bar +
                "*\tPlease indicate (Y)es, or (N)o, if within the collection \"test_1\" you see a document matching\n"
                "*\tthe above displayed \"updated collection document\""
                + star_bar
            )
            see_document = input()
            if see_document in affirmative:
                print(
                    star_bar +
                    "!!!\tThat document SHOULD NOT BE THERE. This means the DELETE operation failed somehow"
                    + star_bar
                )
                sys.exit(1)
            else:
                print(
                    star_bar +
                    "*\tEverything seems good, then. Bye."
                    + star_bar
                )
                sys.exit(0)
        else:
            print(
                star_bar +
                "*\tThis collection should be visible, maybe the CREATE failed? (shouldn't happen, db should also be absent)"
                + star_bar
            )
    else:
        print(
            star_bar +
            "*\tThis database should be visible, this means the CREATE failed."
            + star_bar
        )
