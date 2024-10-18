// HTML Parsing(NORMAL)

    // 	<script src=""/>

    // 	HTMl <--PARSING--> HTML 											 HTMl <--PARSING--> HTML		 
    // 						SCRIPT <--LOAD--> SCRIPT SCRIPT <--RUN--> SCRIPT

    // 	1. HTML PARSING
    // 	2. SCRIPT FETCHED (html parsing is stopped here)
    // 	3. SCRIPT RUN (html parsing is stopped here)
    // 	4. HTML PARSING

// HTML Parsing(ASYNC)

    // 	<script async src=""/>

    // 	HTMl <--PARSING--------------> HTML 						HTMl <--PARSING--> HTML		 
    // 		SCRIPT <--LOAD---------> SCRIPT SCRIPT <--RUN--> SCRIPT

    // 	1. HTML PARSING and SCRIPT FETCHED (PARALLEL)
    // 	2. SCRIPT RUN (html parsing is stopped here)
    // 	3. HTML PARSING

    // 	Note: async attribute does not guarantee the execution order of the scripts, will not work correctly if the scripts are interdepent

    // 	Use: use when the script is not dependent on other like google analytics etc

// HTML Parsing(DEFER)

    // 	<script defer src=""/>

    // 	HTMl <--PARSING---------------------> HTML		 
    // 		SCRIPT <--LOAD---------> SCRIPT  		SCRIPT <--RUN--> SCRIPT

    // 	1. HTML PARSING and SCRIPT FETCHED (PARALLEL)
    // 	2. SCRIPT RUN (only run after html parsing in complete)

    // 	Note: defer attribute guarantees the execution order the scripts

    // 	Use: use when the scripts are dependent on each other as the one scripts output will be decided by other scripts output