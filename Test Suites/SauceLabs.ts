<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>SauceLabs</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>e561e886-deb8-4361-b587-0dc5504f04b3</testSuiteGuid>
   <testCaseLink>
      <guid>ce997c6f-6289-43ba-a7ae-760b14947370</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>6aacd8ee-db64-4919-9e52-902ea4fe00a6</id>
         <masked>false</masked>
         <name>username</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/demofolder/DatadrivenDemo</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>3cbedd9a-e996-4d05-b60b-8c11611e78a8</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/LoginData</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>3cbedd9a-e996-4d05-b60b-8c11611e78a8</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>6aacd8ee-db64-4919-9e52-902ea4fe00a6</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3cbedd9a-e996-4d05-b60b-8c11611e78a8</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>80115d34-cf1e-4d30-9aea-b0a04e2bc98b</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
