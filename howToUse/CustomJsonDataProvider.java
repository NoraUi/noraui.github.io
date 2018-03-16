package com.your.company.data.json;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.github.noraui.data.CommonDataProvider;
import com.github.noraui.data.DataInputProvider;
import com.github.noraui.data.DataOutputProvider;
import com.github.noraui.exception.TechnicalException;

public class CustomJsonDataProvider extends CommonDataProvider implements DataInputProvider, DataOutputProvider {

    /**
     * Specific logger
     */
    private static final Logger logger = LoggerFactory.getLogger(CommonDataProvider.class);

    public CustomJsonDataProvider() {
        super();
        logger.info("data provider used is JSON.");
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void prepare(String scenario) throws TechnicalException {
        // TODO You need implement this method. See official documentation: https://noraui.github.io/#customDataProvider
    }

    @Override
    public void writeFailedResult(int line, String value) throws TechnicalException {
        // TODO You need implement this method. See official documentation: https://noraui.github.io/#customDataProvider
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void writeWarningResult(int line, String value) throws TechnicalException {
        // TODO You need implement this method. See official documentation: https://noraui.github.io/#customDataProvider
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void writeSuccessResult(int line) throws TechnicalException {
        // TODO You need implement this method. See official documentation: https://noraui.github.io/#customDataProvider
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void writeDataResult(String column, int line, String value) throws TechnicalException {
        // TODO You need implement this method. See official documentation: https://noraui.github.io/#customDataProvider
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public int getNbLines() throws TechnicalException {
        // TODO You need implement this method. See official documentation: https://noraui.github.io/#customDataProvider
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String readValue(String column, int line) throws TechnicalException {
        // TODO You need implement this method. See official documentation: https://noraui.github.io/#customDataProvider
        return null;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String[] readLine(int line, boolean readResult) throws TechnicalException {
        // TODO You need implement this method. See official documentation: https://noraui.github.io/#customDataProvider
        return null;
    }

}
