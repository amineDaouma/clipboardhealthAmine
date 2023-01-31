# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here



### ticket 1 : Database management



#### Time estimation : 30min

#### Description
Data should be saved in the database in the Facilities, Agents, and Shifts tables when we want to handle the agents staffing at the shifts belonging to a specific facility. We can populate the DB by some data to start with if the frontend is not yet developed.

#### Technical solution
As a facility could have one or many shifts, there a one to many relationship between the 2 tables. thus, every shift has a foreign key referencing the "parent" facility to which it belongs to. As an agent could work in many shifts and a shift could have many agents, there is a many to many relationship between these 2 tables. Thus, we have to create a an association table that list the mapping between shifts and agent tables. 


#### ACS : 
- Choose a relational database manager like postgreSQL
- Create tables : Agent, Shift, MapperAgentShift and Facility
- Tables structure : 
  -- Facility : (id, name, location)
  -- Shift: (id, name, quarter, facility_fk)
  -- MapperAgentShift : (id_agent, id_shift) 
  -- Agent: (id, name, phone, adress, shift_fk)

### ticket 2 : Create an MVC design pattern with controllers, service and repository management using an ORM

#### Description
Setup the server architecture using MVC pattern.

#### Technical solution
- Choose NodeJS with NestJS framework or Java with Spring boot to setup the server based on the MVC architecture using Inversion control pattern for dependency injection between the 3 layers (Controller, Service, Repository)
- Setup and config database driver in server
- Use JPA API to abstract server/Database interactions in Java world

#### ACS : 
- Run the server correctyly and test the connection between server and database

### ticket 3 : Create useful services (using Typecript)

#### Description
Create relevant backend services

#### Technical solution

Create service : `getShiftsByFacility` : (facilityID): string | number => Shift[])
Create service : `getAgentsByShift` : (shiftID): string | number => Agent[])
Create service : `getShiftsByAgent` : (agentID): string | number => Shift[])

#### ACS :
- all the  3 services retrieve the correct data

### ticket 4 : Create generateReport service
Create service : `generateReport` : (Shift[]) => PDFfile

#### Technical solution
Choose a PDF generator depending on the server runnning environment (java, Node etc.)

#### ACS : 
- Given a list of shifts to the service `generateReport`, it should generate a pdffile using a PDF generator in the backend



























