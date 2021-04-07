import sqlite3

conn = sqlite3.connect("test.db") #connect to database

c = conn.cursor() #used to do stuff

create_users_table = """CREATE TABLE IF NOT EXISTS students (
                        id INTEGER PRIMARY KEY,
                        name TEXT NOT NULL,
                        county TEXT NOT NULL
                        );"""

create_events_table = """CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    host_id INTEGER NOT NULL,
    FOREIGN KEY (host_id) REFERENCES students (id)
);"""

c.execute(create_users_table) #executes the commands
c.execute(create_events_table)

def create_user(name, county):
    create_user_command = f"""INSERT INTO students(name, county)
                    VALUES('{name}','{county}');"""
    c.execute(create_user_command)

def create_Event(name, location, host_id):
    create_event_command = f"""INSERT INTO events (name, location, host_id)
    VALUES('{name}','{location}','{host_id}');
    """
    c.execute(create_event_command)

def get_user_id(name):
    get_user_id_command = f'''SELECT id FROM students WHERE name='{name}';'''
    c.execute(get_user_id_command)
    user_id = c.fetchall()
    if (len(user_id) != 1):
        raise IndexError('More than 1 or no user exists.')

def get_users():
    get_users_command = "SELECT * FROM students"
    c.execute(get_users_command)
    users = c.fetchall()
    for user in users:
        print(str(user[0]) + "\t | \t" + user[1] + "\t | \t" + user[2])
def get_events():
    get_events_command = """SELECT events.id, events.name, events.location, students.name FROM events INNER JOIN
    students ON events.host_id=students.id"""
    c.execute(get_events_command)
    events = c.fetchall()
    for event in events:
        print(str(event[0]) + "\t | \t" + event[1] + "\t | \t" + event[2] + "\t | \t" + event[3])
create_user("Alex", "FCPS")
create_user("Anna", "FCPS")
create_user("Person", "LCPS")
get_users()
print()

create_Event("Tacy Thing", "My house", 1)
create_Event("Dev Club", "Google Meet", 2)
get_events()
print()

while True:
    print("1. Create a USer\t2: Create an Event\t3: View USers\t4: View Events\t5: Exit")
    prompt = input("What would you like to do?")
    prompt_int = 0
    try:
        prompt_int = int(prompt)
    except:
        print("Please only input 1,2,3,4, or 5")
        continue
    if prompt_int not in (1,2,3,4,5):
        print("Please only input 1,2,3,4, or 5")
        continue
    elif prompt_int == 5:
        print("Goodbye.")
        break
    if prompt_int == 1:
        name = input("Please input a name.")
        county = input("Please input a county.")
        create_user(name, county)
        print(f"New user {name} created.")
        print()
    elif prompt_int == 2:
        name = input("Please input event name")
        location = input("Please input location name")
        host = input("Please input host name.")
        host_id = get_user_id(host)
        create_Event(name, location, host_id)
        print(f"New event {name} created.")
    elif prompt_int == 3:
        get_users()
        print()
    else:
        get_events()
        print()
